/* SERENIA Remote Knowledge Adapter
   Activate by setting window.SERENIA_REMOTE_CONFIG before this file loads.
   Supabase anon key is designed for browser use; RLS must remain read-only.
*/
window.SERENIA_REMOTE = (() => {
  const cfg = () => window.SERENIA_REMOTE_CONFIG || {};

  function enabled(){
    const c=cfg();
    return Boolean(c.enabled && c.supabaseUrl && c.anonKey);
  }

  function normalizeTerms(text){
    return (text||"")
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
      .replace(/[^a-z0-9äöüß\s-]/gi," ")
      .split(/\s+/)
      .filter(x=>x.length>2)
      .slice(0,40);
  }

  async function search({text,lang,topics,limit=8}){
    if(!enabled()) return [];
    const c=cfg();
    const res=await fetch(c.supabaseUrl.replace(/\/$/,"")+"/rest/v1/rpc/search_serenia_knowledge",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "apikey":c.anonKey,
        "Authorization":"Bearer "+c.anonKey
      },
      body:JSON.stringify({
        p_lang:lang,
        p_topics:topics||[],
        p_terms:normalizeTerms(text),
        p_limit:limit
      })
    });
    if(!res.ok) throw new Error("SERENIA remote knowledge unavailable: "+res.status);
    return await res.json();
  }

  return {enabled,search};
})();
