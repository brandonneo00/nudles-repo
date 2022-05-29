export default function UserDetail({ userprofiles }) {
  return <div>{userprofiles.map((userprofile) => userprofile.username)}</div>;
}
