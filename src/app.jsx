// import { useState } from "react"
// import Avatar from "./components/avatar"
import Game from "./components/game"
// Props: Là một đối tượng, để truyền dữ liệu từ cha xuống con, nhưng không có chiều ngược lại
// Props: Immutable >< mutable
// State: Trạng thái (bộ nhớ) của component - Cho phép component thay đổi khi tương tác
const App = () => {
  return <div>
    <Game></Game>
  </div>
}

export default App