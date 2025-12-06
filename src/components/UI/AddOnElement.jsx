function AddOnElement({img, altText, heading, text, btnText, onClick}) {
    return (
        <div className="addon-element">
            <img src={img} alt={altText} />
            <h5>{heading}</h5>
            <p>{text}</p>
            <button onClick={onClick}>{btnText}</button>
        </div>
    );
}

export default AddOnElement;