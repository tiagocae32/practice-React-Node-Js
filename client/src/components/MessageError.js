import React from 'react'
import { Link } from 'wouter'

export  function MessageError({message}) {
    return (
        <div>
            {message}
            <Link
                to="/home"
            >
                Go Home
            </Link>
        </div>
    )
}
