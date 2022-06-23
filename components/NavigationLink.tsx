import {useRouter } from 'next/router'
import Link from "next/link";

interface NavigationLinkProps {
    label: string;
    url: string;
}


export const NavigationLink = ({label, url}: NavigationLinkProps) => {
    const router = useRouter();
    const setSelectedClassName = (url: string, path: string) => url === path ? 'selected' : '';

    return (
        <Link href={url}><a className={`mx-2 ${setSelectedClassName(url, router.pathname)}`}>{ label }</a></Link>
    )
}