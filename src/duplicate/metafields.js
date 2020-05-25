export async function extractMetafields(url){
  const metaResponse = await this.getRequest(url, 'GET');
  return metaResponse.metafields.map(meta => {
    delete meta.id;
    delete meta.owner_id;
    delete meta.created_at;
    delete meta.updated_at;
    delete meta.owner_resource;
    delete meta.admin_graphql_api_id;
    return meta
  })
}