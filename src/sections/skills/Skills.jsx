import styles from './Skills.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillsList from '../../common/SkillsList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>skills</h1>
        <div className={styles.skillList}>
            <SkillsList src={checkMarkIcon} skill="HTML"/>
            <SkillsList src={checkMarkIcon} skill="CSS"/>
            <SkillsList src={checkMarkIcon} skill="JavaScript"/>
            <SkillsList src={checkMarkIcon} skill="React"/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillsList src={checkMarkIcon} skill="Python"/>
            <SkillsList src={checkMarkIcon} skill="Django"/>
            <SkillsList src={checkMarkIcon} skill="SQL"/>
            <SkillsList src={checkMarkIcon} skill="Git"/>
        </div>
        <hr/>
    </section>
  )
}

export default Skills