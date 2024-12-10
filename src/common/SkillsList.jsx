

function SkillsList({src, skill}) {
  return (
    <div>
        <span>
            <img src={src} alt=' Check Mark Icon'/>
            <p>{skill}</p>
        </span>
    </div>
  )
}

export default SkillsList