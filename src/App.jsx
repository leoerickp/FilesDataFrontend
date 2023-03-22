import { TableData } from "./components/TableData"
import { Footer } from "./layouts/Footer"
import { Header } from "./layouts/Header"

export const App = () => {
    return (
        <>
            <Header />
            <div className="container mt-5 mb-5">
                <TableData />
            </div>
            <Footer />
        </>
    )
}
