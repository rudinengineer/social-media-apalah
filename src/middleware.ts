import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
import { AUTH_PATH, PROTECTED_PATH, PUBLIC_PATH, ROOT_PATH } from "./lib/route"
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

// export const config = { matcher: ["/dashboard/", "/dashboard/:path*"] };
export default async function Middleware() {
    const session = await getServerSession(authOptions)

    if ( AUTH_PATH.includes(req.nextUrl.pathname) && !session?.user ) {
            return NextResponse.redirect(new URL('/signin', process.env.NEXT_BASEURL))
        }
        if ( PROTECTED_PATH.includes(req.nextUrl.pathname) ) {
            if ( session?.user ) {
                return NextResponse.redirect(new URL(ROOT_PATH, process.env.NEXT_BASEURL))
            }
        }
        return NextResponse.next()
}

/*export default withAuth(
    function middleware(req) {
        if ( AUTH_PATH.includes(req.nextUrl.pathname) && !req.nextauth.token ) {
            return NextResponse.redirect(new URL('/signin', process.env.NEXT_BASEURL))
        }
        if ( PROTECTED_PATH.includes(req.nextUrl.pathname) ) {
            if ( req.nextauth.token ) {
                return NextResponse.redirect(new URL(ROOT_PATH, process.env.NEXT_BASEURL))
            }
        }
        return NextResponse.next()
        
        // } else {
        //     if ( req.nextUrl.pathname !== ROOT_PATH && !PUBLIC_PATH.includes(req.nextUrl.pathname) && !req.nextauth.token ) {
        //         return NextResponse.redirect(new URL('/signin', process.env.NEXT_BASEURL))
        //     }
        // }
    },
    {
        secret: process.env.NEXT_AUTH_SECRET!,
    }
)*/
