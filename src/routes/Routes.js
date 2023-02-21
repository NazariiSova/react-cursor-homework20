import React from "react";
import Nav from "../components/Nav";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";

import MainPage from "../pages/main/Main.page";
import PublicationsPage from "../pages/publications/Publications.page";
import PhotoPage from "../pages/photos/Photos.page";
import ContactsPage from "../pages/contacts/Contacts.page";


const Routes = () => {
    return <div>
        <Nav />
        <ReactRouterRoutes>
            <Route path="/main" element={<MainPage />}/>
            <Route path="/publications" element={<PublicationsPage />}/>
            <Route path="/photos" element={<PhotoPage />}/>
            <Route path="/contacts" element={<ContactsPage />}/>
        </ReactRouterRoutes>
    </div>
};
 export default Routes;