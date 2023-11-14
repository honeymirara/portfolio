import style from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <div className={style.headerInfo}>
        <div className={style.img}></div>
        <div className={style.info}>
          <h1>Yulia Balashova</h1>
          <p>Based: Belarus</p>
          <p>Email: honeymirara@gmail.com</p>
        </div>
      </div>
      <div className={style.workExperience}>
        <h1>Work Experience</h1>
        <div className={style.jobInfo}>
          <h1>Hschool</h1>
          <p>november 2022 to present</p>
          <p>An educational platform for online learning. It serves as an information space that facilitates the learning process for participants, offering opportunities for remote learning, access to methodological materials and information, and also enables the creation of tests to evaluate students' knowledge levels. In this role, my responsibilities included front-end page layout design, code refactoring, developing unit tests, and more. </p>
        </div>
      </div>
      <div className={style.skills}>
        <h1>Skills</h1>
        <table width="100%" cellspacing="0" cellpadding="5">
          <tr>
            <td width="200" valign="top">Programming Languages:</td><td valign="top">Javascript, TypeScript</td>
          </tr>
        </table>
      </div>
      <div className={style.education}>
        <div className={style.eduInfo}>
          <div className={style.img}></div>
          <p>Bachelor Degree, The Faculty of Chemistry, BSU September 2020 - June 2024</p>
        </div>
        <div className={style.language}>
          <div className={style.img}></div>
          <p>English: B1+</p>
        </div>
      </div>
      <div className={style.qr}></div>
    </>
  )
}
