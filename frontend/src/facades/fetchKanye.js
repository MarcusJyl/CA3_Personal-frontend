import { handleHttpErrors, makeOptions } from "./fetchUtils";
import { KanyeURL as url } from "./settings";

function kanyeFetcher() {
    const fetchData = () => {
      const options = makeOptions("GET", true);
      return fetch(url, options).then(handleHttpErrors);
    };
    return { fetchData };
  }

  const kanyeFacade = kanyeFetcher();

export default kanyeFacade;