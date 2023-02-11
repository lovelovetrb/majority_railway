import css from "components/Headline/Headline.module.css"

type Props = {
  subject: string;
}

const Headline = ({ subject }: Props) => {
  return (
    <div className={}>
      <h1>{subject}</h1>
    </div>
  )
}


export default Headline