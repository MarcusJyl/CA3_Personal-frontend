import { makeOptions } from "../facades/fetchUtils"
import { allNamesURL } from "../facades/settings"
import { handleHttpErrors } from "../facades/fetchUtils";
import React, { useState, useEffect } from "react";



export default function AllNames() {
    const [names, setNames] = useState([])
    useEffect(() => {
        const options = makeOptions("GET", true);
        fetch(allNamesURL, options)
            .then(handleHttpErrors)
            .then((data) => {
                console.log(data.all)
                setNames([...data.all])


            })
    }, [])


    return (
        <div>
            <h1>Her er alle navne i databasen</h1>
            <table>
                <thead><tr><td>User</td><td>First Name</td></tr></thead>
                <tbody>{names.map((p) => {
                    return (
                        <tr key={p.fName}><td>{p.username}</td><td>{p.fname}</td></tr>
                    )
                })}</tbody>
            </table>

        </div>
    )
}