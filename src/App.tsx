import { useEffect, useState } from "react";
import {
  Text,
  Pane,
  Heading,
  Button,
  SideSheet,
  Paragraph,
  Link,
} from "evergreen-ui";

export const App: React.FC = () => {
  const [params, setParams] = useState<string | null>();
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setParams(urlParams.get("app"));
  }, []);

  return (
    <>
      <Pane width="100%" maxWidth="1280px" padding="2rem" marginX="auto">
        <Pane display="flex" flexDirection="column">
          <Heading is="h1" fontSize="1.5rem" fontWeight="700">
            USD443
          </Heading>
          <Text marginTop="4px">Dodge City Public Schools</Text>
        </Pane>
        <Pane
          marginTop="8rem"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={"2rem 0"}
        >
          <Pane
            display="inline-flex"
            alignItems="center"
            padding="2rem"
            borderRadius="10px"
            border={"2px solid black"}
          >
            <img width={"150px"} src="/FMServer_icon.png" alt="Claris Icon" />
            <Pane display="flex" flexDirection="column" gap={"0.8rem 0"}>
              <Text fontWeight="700" fontSize="1.8rem">
                Opening FileMaker
              </Text>
              <Text fontSize="1.2rem">
                FileMaker Form{" "}
                <Text
                  fontWeight="700"
                  fontSize="1.2rem"
                  textDecoration="underline"
                >
                  {params?.toUpperCase()}
                </Text>{" "}
                is opening in the background
              </Text>
              <Link
                fontWeight="700"
                fontSize="1rem"
                textDecoration="underline"
                href="/"
              >
                Click here to manually open the form
              </Link>
              <Text fontSize="1rem">
                You can safely close this tab at any point
              </Text>
            </Pane>
          </Pane>
          <Pane>
            <Button onClick={() => setIsShown(true)} fontSize="1rem">
              Click here if you are having problems
            </Button>
          </Pane>
        </Pane>
      </Pane>
      <SideSheet isShown={isShown} onCloseComplete={() => setIsShown(false)}>
        <Pane
          display="flex"
          flexDirection="column"
          gap={"2rem 0"}
          padding="4rem"
        >
          <Heading fontSize="1.8rem" fontWeight="700">
            Contact Support
          </Heading>
          <Pane display="flex" flexDirection="column" gap={"2rem 0"}>
            <Pane display="flex" flexDirection="column">
              <Text fontSize="1.2rem">
                Carlos Rodriguez{" "}
                <Text>(Web Master / Information Management)</Text>
              </Text>
              <Link href="mailto:rodriguez.carlos@usd443.org">
                rodriguez.carlos@usd443.org
              </Link>
              <Text>Phone: 371-1027</Text>
            </Pane>
            <Pane display="flex" flexDirection="column">
              <Text fontSize="1.2rem">
                Victor Guerrero <Text>(Co-IT Supervisor)</Text>
              </Text>
              <Link href="mailto:guerrero.victor@usd443.org">
                guerrero.victor@usd443.org
              </Link>
              <Text>Phone: 371-1079</Text>
            </Pane>
          </Pane>
          <Heading fontSize="1.3rem" fontWeight="700">
            Common Problems and Possible Solutions
          </Heading>
          <Pane>
            <Heading marginBottom="4px" fontSize="1rem">
              Is FileMaker Installed?
            </Heading>
            <Paragraph>
              Please check that you have the latest version of FileMaker
              installed on your device. Teachers using laptops should already
              have FileMaker installed. Please contact support if you do not.
            </Paragraph>
            <Paragraph marginTop="2rem">
              Those using iPads will need to make sure they have the latest
              FileMaker app installed. You can download the latest version by
              using the SelfService app.
            </Paragraph>
          </Pane>
        </Pane>
      </SideSheet>
    </>
  );
};
