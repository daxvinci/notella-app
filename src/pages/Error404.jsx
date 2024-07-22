import { Link } from "react-router-dom";

const Error404 = () => {
    return ( 
        <>
        <div className="empty absolute top-0 bottom-0 left-0 right-0 -z-10"></div>
        <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
            <div class="text-center">
                <p class="text-2xl font-semibold text-indigo-600">404</p>
                <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">You're a long way from home</h1>
                <p class="mt-6 text-base font-bold leading-7 text-gray-700">There's nothing here and it's getting dark</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                <Link to="/" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go Home</Link>
            </div>
        </div>
        </main>
        </>
     );
}
 
export default Error404;