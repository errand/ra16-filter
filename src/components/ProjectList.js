import Project from './Project'

export default function ProjectList(props) {
  const {...projects} = props;
  return (
  <>
    {projects.props.map(item => <Project item={item} key={item.id}  />)}
  </>
  )
}
