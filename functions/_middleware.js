// app.divid.site sirve directo el modo fantasma (misma build que divid.site/ghost).
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname.startsWith('app.') && !url.pathname.startsWith('/ghost') && !url.pathname.startsWith('/assets')) {
    url.pathname = '/ghost/';
    return Response.redirect(url.toString(), 302);
  }
  return next();
}
