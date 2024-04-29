import React from "react";
import { createContext, useState } from "react";

//create a context, with createContext api.  we have used createContext api to create our userDetailsContext. Now, the context got created, so we will need to create a provider.In the function UserDetailsProvider, we created a provider for userDetailsContext. <contextname.Provider> is a common syntax for creating it. Please note a value prop here. The value prop will be used always to pass the shared state down.
export const favoritesContext = createContext();

const FavoritesProvider = (props) => {
  // this state will be shared with all components
  const [favorites, setFavorites] = useState([]);

  return (
    // this is the provider providing state
    <favoritesContext.Provider value={[favorites, setFavorites]}>
      {props.children}
    </favoritesContext.Provider>
  );
};

export default FavoritesProvider;