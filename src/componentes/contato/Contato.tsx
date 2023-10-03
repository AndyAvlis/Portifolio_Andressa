import "./Contato.css"

function Contato(){
    return(
            <>
            <div className="formulario">
            <div className="form-container">
                <form className="form">
                <div className="form-group">
                    <label htmlFor="email">Company Email</label>
                    <input name="email" id="email" type="text"  />
                </div>
                <div className="form-group">
                    <label htmlFor="textarea">How Can We Help You?</label>
                    <textarea name="textarea" id="textarea" rows={10} cols={50}>          </textarea>
                </div>
                    <button className="form-submit-btn" type="submit">Submit</button>
                </form>
            </div>
            </div>
            </>
        )
    }
    export default Contato