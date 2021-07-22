import { Container, Row, Col } from 'react-bootstrap'

const Frontpage = () => {
    return (
        <div class="container " id="frontpage-wrapper">
            <div class="row align-items-center col-sm-12" id="frontpage">
                <div class="col text">
                    <h1 className="title ">Powerful web hosting</h1>
                    <h3 className="smallheading">
                        The fastest and most powerful web hosting site ever.
                    </h3>
                </div>
                <div className="col">
                </div>
            </div>
        </div>
    )
}

export default Frontpage
