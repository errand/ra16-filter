import Project from './Project'

export default function ProjectList(props) {
  const {...projects} = props;
  console.log(projects)
  return (
  <>
    {projects.props.map(item => <Project img={item.img} category={item.category} key={item.img}  />)}
  </>
  )
}
