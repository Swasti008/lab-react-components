export default function body(props) {
  return props.data.map((image) => {
    return(<div key={image.id} className="column">
      <img src={image.img} alt=""></img>
    </div>);
  });
}

