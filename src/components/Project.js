export default function ProjectList(props) {
  const {item} = props;
  return (
    <div data-id={item.id} data-category={item.category}>
      <img src={item.img} alt=""  />
    </div>
      )
}
