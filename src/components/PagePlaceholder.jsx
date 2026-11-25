
function PagePlaceholder({ title }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800">
        {title}
      </h1>

      <p className="mt-2 text-gray-500">
        Welcome to SplitSync.
      </p>
    </div>
  )
}

export default PagePlaceholder
