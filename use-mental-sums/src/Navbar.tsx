import { Flex, Button, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
          console.log("Navbar Rerender")

    return (
        <Center>
            <Flex gap="8" justify="space-between" wrap="wrap" maxW="500px">
                <Button>
                    <Link to="/questions">Questions</Link>
                </Button>
                <Button>
                    <Link to="/history">History</Link>
                </Button>
                <Button>
                    <Link to="/settings">Settings</Link>
                </Button>
            </Flex>
        </Center>
    );
}

export default Navbar;
