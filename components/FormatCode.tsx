export default function FormatCode() {
  return (
    <pre className="w-screen">
      {JSON.stringify(window.Telegram?.WebApp, null, 2)}
    </pre>
  )
}
