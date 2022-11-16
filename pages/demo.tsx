import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

export default function Demo(props: {
  name:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <div>
      <h1>My name is: {props.name}</h1>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetch("https://randomuser.me/api").then((res) =>
    res.json()
  );

  return {
    props: { name: data.results[0].name.first },
  };
}
