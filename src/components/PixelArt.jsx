export function Avatar() {
  return <svg viewBox="0 0 32 44" className="pixel-avatar" aria-hidden="true" shapeRendering="crispEdges"><path fill="#17191d" d="M8 1h16v3h4v12h-4v5h4v17h-4v6H8v-6H4V21h4v-5H4V6h4z" /><path fill="#533725" d="M8 4h16v3h4v5H16V9h-4v7H8z" /><path fill="#e5ae70" d="M12 12h12v7h-4v3h-8zM5 28h4v6H5m19-6h4v6h-4" /><path fill="#1c2028" d="M20 12h3v3h-3" /><path fill="#3e6685" d="M9 22h14v12H9zM5 23h4v5H5m18-5h4v5h-4" /><path fill="#6895a5" d="M11 23h3v8h-3m8-8h3v8h-3" /><path fill="#343947" d="M10 34h5v7h-5m8-7h5v7h-5" /><path fill="#9d7145" d="M8 40h7v3H8m10-3h7v3h-7" /></svg>;
}
export function Landscape({
  biome = 'sky'
}) {
  return <div className={`landscape landscape-${biome}`} aria-hidden="true"><div className="celestial" /><div className="stars" /><svg viewBox="0 0 1000 400" preserveAspectRatio="none" className="mountains" shapeRendering="crispEdges"><path fill="currentColor" opacity=".45" d="M0 250h40v-30h30v-55h30v-40h30V90h35v60h25v40h30v60h70v-50h25v-50h25v-40h30V70h30v40h25v60h35v70h60v-30h40v-60h25V90h30V30h30v60h30v50h30v60h40v65h40v-35h35v-70h30v-50h30v-40h30v65h30v65h30v60h70v-45h30v-60h40v-45h30v40h40v100h40v150H0z" /><path fill="currentColor" opacity=".5" d="M0 320h80v-40h40v-40h35v40h50v50h90v-50h40v-65h40v-60h40v65h35v50h50v50h65v-45h40v-65h35v-35h40v80h35v45h90v-55h35v-70h35v-55h40v55h35v80h45v30h100v120H0z" /></svg><div className="cloud cloud-one" /><div className="cloud cloud-two" /><div className="horizon" /></div>;
}
export function Island({
  desert = false
}) {
  return <svg className="island-art" viewBox="0 0 600 220" aria-hidden="true" shapeRendering="crispEdges"><path fill="#332926" d="M10 30h580v45h-25v35h-40v30h-55v30h-65v25H210v-20h-70v-30H85v-35H40V75H10z" /><path fill="#6f4731" d="M25 40h550v35h-35v35h-65v30h-80v30H235v-20h-75v-35H90V80H25z" /><path fill="#95623c" d="M60 45h55v50H80zm95 15h60v65h-30V95h-30zm110-10h65v95h-35V95h-30zm125 5h55v65h-30V90h-25zm90-10h50v45h-50z" /><path fill={desert ? '#bd873b' : '#456421'} d="M10 20h30V10h520v10h30v30h-30v15h-45V50H85v15H40V50H10z" /><path fill={desert ? '#e6b45a' : '#80a739'} d="M25 20h55V10h440v10h55v20H25z" /><path fill={desert ? '#f6ce7a' : '#b0c553'} d="M45 20h100v6H45zm160-5h80v6h-80zm145 8h70v6h-70zm100-8h60v6h-60z" />{[85, 160, 255, 355, 465, 520].map((x, i) => <path key={x} fill={desert ? '#a36a31' : '#527d26'} d={`M${x} 28v-10h5v-8h5v18h12v5h-22z`} opacity={i % 2 ? '.6' : '1'} />)}</svg>;
}
export function Tree() {
  return <svg className="tree-art" viewBox="0 0 110 170" aria-hidden="true" shapeRendering="crispEdges"><path fill="#513322" d="M47 65h19v75h13v12H34v-12h13z" /><path fill="#936038" d="M52 65h6v77h-6zM33 80h10v15h12v10H40V95h-7m28-10h15V70h8v23H61" /><path fill="#304f26" d="M20 25h15V10h40v10h15v20h12v40H85v20H28V87H8V45h12z" /><path fill="#608227" d="M20 30h20V16h30v12h15v18h12v22H78v16H23V70H13V48h7z" /><path fill="#8a9e32" d="M31 30h15V20h20v14h14v15H61v12H27V45h4z" /></svg>;
}
export function ProjectIcon({
  kind
}) {
  return <svg viewBox="0 0 64 64" className="project-art" aria-hidden="true" shapeRendering="crispEdges"><path fill="#142632" d="M8 5h48v46H8z" /><path fill="#a8bec5" d="M11 8h42v40H11z" /><path fill="#416477" d="M15 12h34v31H15z" /><path fill="#102837" d="M18 15h28v25H18z" />{kind === 'robot' ? <><path fill="#83d9e0" d="M21 22h6v7h-6m16-7h6v7h-6M27 34h10v3H27" /><path fill="#839ca4" d="M3 19h5v18H3m53-18h5v18h-5" /></> : kind === 'graph' ? <path fill="#d9ab72" d="M21 34h4v-6h4v-9h4v9h4v-4h4v-6h4v4h-4v6h-4v4h-4v-8h-4v8h-4v6h-4z" /> : <path fill="#6bc0c8" d="m22 24 7-5v4l-4 3 4 3v4l-7-5zm20 0-7-5v4l4 3-4 3v4l7-5z" />}<path fill="#6d828d" d="M25 51h14v4H25zM8 55h48v7H8z" /><path fill="#cfdbd7" d="M12 55h40v3H12z" /></svg>;
}
