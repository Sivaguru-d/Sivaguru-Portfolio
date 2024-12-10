import styles from './Projects.module.css';
import viberr from '../../assets/viberr.png';
import ProjectsCard from '../../common/ProjectsCard';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectsCard src={viberr} h3='viberr' p="Streaming App"/>
            <ProjectsCard src={freshBurger} h3='Fresh Burger' p="Burger Corner"/>
            <ProjectsCard src={hipsster} h3='Hipsster' p="Glass Shop"/>
            <ProjectsCard src={fitLift} h3='Fit Lift' p="Fitness App"/>
        </div>
    </section>
  )
}

export default Projects