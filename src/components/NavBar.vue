<template>
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl font-black">Grades Calculator</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li>
          <details>
            <summary>About</summary>
            <ul className="bg-base-100 rounded-t-none p-2">
              <li><a>Home</a></li>
              <li><a>About</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>
