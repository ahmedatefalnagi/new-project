import { Ban, BellRing } from "lucide-react"
import Alert from "./components/ui/Alert"

const App = () => {
  return (
    <div>
      <Alert type={"alert-danger"}
        icon={<Ban size={20} />}
        title={"Something went wrong"}
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Aperiam debitis itaque accusantium aliquam.
          Error obcaecati esse eaque rem aperiam deleniti!"
        />

        <Alert type={"alert-default"} icon={<BellRing size={20} />}
          title={"Alert Title"}>
          <p>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam debitis itaque accusantium aliquam.
                doloremque{""}
                <a href="/">praesentium</a>
                Error obcaecati esse eaque rem aperiam deleniti!"
          </p>
        </Alert>

         <Alert type={"alert-info"}
          icon={<BellRing size={20} />}
          title={"Alert Title"}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aperiam debitis itaque accusantium aliquam.
            Error obcaecati esse eaque rem aperiam deleniti!"
        />
    </div>
  )
}

export default App
