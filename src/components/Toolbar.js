export default function Toolbar(props) {
  const {filters, selected} = props;

  const onSelectFilter = () => {
    props.onSelectFilter(props);
  }

  return (
    <div className="filter">
      {filters.map(item => <button key={item} onClick={onSelectFilter} className={selected ? 'selected' : ''}>{item}</button>)}
    </div>
  )
}
