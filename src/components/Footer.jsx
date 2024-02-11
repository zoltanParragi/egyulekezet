

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer p-5 text-center'>E Gyülekezet &copy; {currentYear}</div>
  )
}
