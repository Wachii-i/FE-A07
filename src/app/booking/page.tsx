'use client'

import DateReserve from "@/components/DateReserve"
import TextField from "@mui/material/TextField"

export default function Booking() {
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl">New Booking</div>
                <div className="w-fit flex flex-col gap-4">
                    <TextField variant="standard" name="Name-Lastname" label="Name-Lastname"/>
                    <TextField variant="standard" name="Contact-Number" label="Contact-Number"/>
                    <DateReserve/>
                </div>
            <button
                name="Book Venue"
                className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
            >
                Book Venue
            </button>
        </main>
    );
}