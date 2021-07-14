export default function ({ store, redirect }) {
  const user = store.$auth.user;
  if (user.role !== 'admin') {
    redirect('/feedback');
  }
}
