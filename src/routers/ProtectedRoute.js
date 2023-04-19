import React from 'react'
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext'
import { toast } from 'react-toastify'

function ProtectedRoute({children, redirectPath = '/'}) {
    const {loggedIn} = useAuth();
    if (!loggedIn) {
         toast.error("Yetkisiz Erişim 🤬", {autoClose:3000})
        return <Navigate to={redirectPath} />
    }
    return children ? children : <Outlet />;
}

export default ProtectedRoute