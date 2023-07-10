
import type { ReactNode } from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import HeaderMenu from './Components/HeaderMenu';

export type Props = {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <div style={{ backgroundColor: 'hotpink' }}>
                <div className='container'>
                    <HeaderMenu />
                </div>
            </div>

            <div className='container'>
                {children}
            </div>
        </>
    )
}
export default Layout;