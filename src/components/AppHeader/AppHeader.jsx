import logoDark from '/imgs/logos/logoDark.svg'
import './header.css'
import NavBar from '../NavBar/NavBar'
export default function AppHeader() {

    return (
        <>
            <header>
                <img src={logoDark} alt="Studio-Ora-Solare" />
            </header>
            <NavBar />
        </>
    )
}