interface Props{
    children: string;
    //children: ReactNode; -> to pass HTML content as parameter

}

const Alert = ({children}: Props) => {
  return (
    <div className="alert alert-primary">{children}</div>
  )
}

export default Alert