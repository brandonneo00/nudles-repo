export default function UserDetail({ userprofiles }) {
  return <>{userprofiles.map((userprofile) => userprofile.username)}</>;
}
