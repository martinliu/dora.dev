var Ue=Object.defineProperty;var xe=(t,e,n)=>e in t?Ue(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var le=(t,e,n)=>(xe(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function j(){}function Ee(t){return t()}function ze(){return Object.create(null)}function Q(t){t.forEach(Ee)}function Re(t){return typeof t=="function"}function B(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ve(t){return Object.keys(t).length===0}function te(t){return t??""}function p(t,e){t.appendChild(e)}function O(t,e,n){t.insertBefore(e,n||null)}function T(t){t.parentNode&&t.parentNode.removeChild(t)}function De(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function q(){return S(" ")}function X(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ge(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function Je(t){return Array.from(t.childNodes)}function Z(t,e){e=""+e,t.data!==e&&(t.data=e)}function qe(t,e){t.value=e??""}let he;function K(t){he=t}const x=[],M=[];let J=[];const de=[],Qe=Promise.resolve();let me=!1;function Ke(){me||(me=!0,Qe.then(Me))}function fe(t){J.push(t)}function V(t){de.push(t)}const ce=new Set;let U=0;function Me(){if(U!==0)return;const t=he;do{try{for(;U<x.length;){const e=x[U];U++,K(e),Xe(e.$$)}}catch(e){throw x.length=0,U=0,e}for(K(null),x.length=0,U=0;M.length;)M.pop()();for(let e=0;e<J.length;e+=1){const n=J[e];ce.has(n)||(ce.add(n),n())}J.length=0}while(x.length);for(;de.length;)de.pop()();me=!1,ce.clear(),K(t)}function Xe(t){if(t.fragment!==null){t.update(),Q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(fe)}}function Ye(t){const e=[],n=[];J.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),J=e}const ee=new Set;let W;function Be(){W={r:0,c:[],p:W}}function Fe(){W.r||Q(W.c),W=W.p}function L(t,e){t&&t.i&&(ee.delete(t),t.i(e))}function I(t,e,n,i){if(t&&t.o){if(ee.has(t))return;ee.add(t),W.c.push(()=>{ee.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function ne(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function G(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function D(t){t&&t.c()}function E(t,e,n){const{fragment:i,after_update:a}=t.$$;i&&i.m(e,n),fe(()=>{const r=t.$$.on_mount.map(Ee).filter(Re);t.$$.on_destroy?t.$$.on_destroy.push(...r):Q(r),t.$$.on_mount=[]}),a.forEach(fe)}function R(t,e){const n=t.$$;n.fragment!==null&&(Ye(n.after_update),Q(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){t.$$.dirty[0]===-1&&(x.push(t),Ke(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(t,e,n,i,a,r,o=null,s=[-1]){const l=he;K(t);const c=t.$$={fragment:null,ctx:[],props:r,update:j,not_equal:a,bound:ze(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ze(),dirty:s,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(d,g,..._)=>{const f=_.length?_[0]:g;return c.ctx&&a(c.ctx[d],c.ctx[d]=f)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](f),u&&et(t,d)),g}):[],c.update(),u=!0,Q(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const d=Je(e.target);c.fragment&&c.fragment.l(d),d.forEach(T)}else c.fragment&&c.fragment.c();e.intro&&L(t.$$.fragment),E(t,e.target,e.anchor),Me()}K(l)}class N{constructor(){le(this,"$$");le(this,"$$set")}$destroy(){R(this,1),this.$destroy=j}$on(e,n){if(!Re(n))return j;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const a=i.indexOf(n);a!==-1&&i.splice(a,1)}}$set(e){this.$$set&&!Ve(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const tt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(tt);const Oe=t=>{let e="";return e+=t[0].toUpperCase(),e+=t.substring(1),e};function nt(t){let e,n=t[1].name+"",i,a,r,o;return{c(){e=b("div"),i=S(n),m(e,"class",a=te(t[2])+" svelte-19mpc46"),m(e,"role","link"),m(e,"tabindex","-1")},m(s,l){O(s,e,l),p(e,i),r||(o=X(e,"click",t[5]),r=!0)},p(s,[l]){l&2&&n!==(n=s[1].name+"")&&Z(i,n),l&4&&a!==(a=te(s[2])+" svelte-19mpc46")&&m(e,"class",a)},i:j,o:j,d(s){s&&T(e),r=!1,o()}}}function it(t,e,n){let{entity:i}=e,{details:a}=e,{view_mode:r}=e,{selected_entity:o}=e;function s(c){n(4,o=c),document.getElementById("entityPopover").showPopover()}const l=()=>s(i);return t.$$set=c=>{"entity"in c&&n(0,i=c.entity),"details"in c&&n(1,a=c.details),"view_mode"in c&&n(2,r=c.view_mode),"selected_entity"in c&&n(4,o=c.selected_entity)},[i,a,r,s,o,l]}class at extends N{constructor(e){super(),F(this,e,it,nt,B,{entity:0,details:1,view_mode:2,selected_entity:4})}}function Ce(t,e,n){const i=t.slice();return i[8]=e[n][0],i[9]=e[n][1],i}function Le(t){let e,n,i,a=t[3].measured_by+"",r,o=t[4]==="detail"&&Ae();return{c(){e=b("small"),e.textContent="measured by",n=q(),i=b("h5"),r=S(a),o&&o.c(),m(e,"class","svelte-467nic"),m(i,"class","svelte-467nic")},m(s,l){O(s,e,l),O(s,n,l),O(s,i,l),p(i,r),o&&o.m(i,null)},p(s,l){l&8&&a!==(a=s[3].measured_by+"")&&Z(r,a),s[4]==="detail"?o||(o=Ae(),o.c(),o.m(i,null)):o&&(o.d(1),o=null)},d(s){s&&(T(e),T(n),T(i)),o&&o.d()}}}function Ae(t){let e;return{c(){e=S(":")},m(n,i){O(n,e,i)},d(n){n&&T(e)}}}function Ie(t){let e,n,i;function a(o){t[7](o)}let r={entity:t[8],details:t[9],view_mode:t[4]};return t[0]!==void 0&&(r.selected_entity=t[0]),e=new at({props:r}),M.push(()=>G(e,"selected_entity",a)),{c(){D(e.$$.fragment)},m(o,s){E(e,o,s),i=!0},p(o,s){const l={};s&8&&(l.entity=o[8]),s&8&&(l.details=o[9]),s&16&&(l.view_mode=o[4]),!n&&s&1&&(n=!0,l.selected_entity=o[0],V(()=>n=!1)),e.$set(l)},i(o){i||(L(e.$$.fragment,o),i=!0)},o(o){I(e.$$.fragment,o),i=!1},d(o){R(e,o)}}}function ot(t){let e,n,i,a=t[3].name+"",r,o,s,l,c,u,d,g,_,f=t[3].measured_by&&Le(t),A=ne(Object.entries(t[3].entities)),y=[];for(let v=0;v<A.length;v+=1)y[v]=Ie(Ce(t,A,v));const C=v=>I(y[v],1,1,()=>{y[v]=null});return{c(){e=b("div"),n=b("div"),i=b("span"),r=S(a),o=q(),f&&f.c(),s=q(),l=b("div"),c=b("div");for(let v=0;v<y.length;v+=1)y[v].c();m(i,"class","entity-group-name svelte-467nic"),m(n,"class","group-name svelte-467nic"),m(n,"role","link"),m(n,"tabindex","-1"),m(c,"class","entities svelte-467nic"),m(l,"class","entities-wrapper svelte-467nic"),m(l,"id",t[2]),m(e,"class",u="entity-group "+t[4]+" "+t[1]+" svelte-467nic")},m(v,w){O(v,e,w),p(e,n),p(n,i),p(i,r),p(n,o),f&&f.m(n,null),p(e,s),p(e,l),p(l,c);for(let k=0;k<y.length;k+=1)y[k]&&y[k].m(c,null);d=!0,g||(_=X(n,"click",t[6]),g=!0)},p(v,[w]){if((!d||w&8)&&a!==(a=v[3].name+"")&&Z(r,a),v[3].measured_by?f?f.p(v,w):(f=Le(v),f.c(),f.m(n,null)):f&&(f.d(1),f=null),w&25){A=ne(Object.entries(v[3].entities));let k;for(k=0;k<A.length;k+=1){const P=Ce(v,A,k);y[k]?(y[k].p(P,w),L(y[k],1)):(y[k]=Ie(P),y[k].c(),L(y[k],1),y[k].m(c,null))}for(Be(),k=A.length;k<y.length;k+=1)C(k);Fe()}(!d||w&4)&&m(l,"id",v[2]),(!d||w&18&&u!==(u="entity-group "+v[4]+" "+v[1]+" svelte-467nic"))&&m(e,"class",u)},i(v){if(!d){for(let w=0;w<A.length;w+=1)L(y[w]);d=!0}},o(v){y=y.filter(Boolean);for(let w=0;w<y.length;w+=1)I(y[w]);d=!1},d(v){v&&T(e),f&&f.d(),De(y,v),g=!1,_()}}}function st(t,e,n){let{column:i}=e,{entity_group_id:a}=e,{entity_group:r}=e,{view_mode:o}=e,{selected_entity:s}=e;function l(d){n(0,s=d),document.getElementById("entityPopover").showPopover()}const c=()=>l(a);function u(d){s=d,n(0,s)}return t.$$set=d=>{"column"in d&&n(1,i=d.column),"entity_group_id"in d&&n(2,a=d.entity_group_id),"entity_group"in d&&n(3,r=d.entity_group),"view_mode"in d&&n(4,o=d.view_mode),"selected_entity"in d&&n(0,s=d.selected_entity)},[s,i,a,r,o,l,c,u]}class rt extends N{constructor(e){super(),F(this,e,st,ot,B,{column:1,entity_group_id:2,entity_group:3,view_mode:4,selected_entity:0})}}const lt={"climate-for-learning":{name:"Climate for learning",summary:"A climate for learning is an atmosphere within an organization that fosters a culture of continuous improvement and knowledge sharing. It's not just about formal training programs, but a mindset where learning is seen as a strategic investment, essential for growth and success. A strong climate for learning is directly linked to better software delivery performance, including increased deployment frequency, reduced lead time for changes, and improved team culture. It also contributes to overall organizational performance, making it a valuable investment for any organization.",entities:{"code-maintainability":{name:"Code Maintainability",link:"/capabilities/code-maintainability/",summary:"Systems and tools that make it easy for developers to change code maintained by others, to find examples in the codebase, to reuse other people’s code, and to add, upgrade, and migrate to new versions of dependencies without breaking their code."},"documentation-quality":{name:"Documentation quality",link:"/capabilities/documentation-quality/",summary:"<p>Documentation quality interacts with technical capabilities to improve organizational performance. This interaction dramatically amplifies the impact that software teams can deliver toward achieving an organization&rsquo;s overarching goals. Practices which contribute to documentation quality include:</p><ul><li>Documenting critical use cases for your products and services.</li><li>Creating clear guidelines for updating and editing existing documentation.</li><li>Defining owners.</li><li>Including documentation as part of the software development process.</li><li>Recognizing documentation work during performance reviews and promotions.</li></ul>"},"teams-empowered-to-choose-tools":{name:"Empowering teams to choose tools",link:"/capabilities/teams-empowered-to-choose-tools/",summary:"Teams that can choose which tools to use do better at continuous delivery. No one knows better than practitioners what they need to be effective."},"generative-organizational-culture":{name:"Generative culture",link:"/capabilities/generative-organizational-culture/",summary:"This measure of organizational culture is based on a typology developed by Ron Westrum, a sociologist who studied safety-critical complex systems in the domains of aviation and healthcare. Our own research has found that this measure of culture is predictive of IT Performance, organizational performance, and decreasing burnout. Hallmarks of this include good information flow, high cooperation and trust, bridging between teams, and embracing novel solutions."}}},"fast-flow":{name:"Fast flow",summary:`Flow is the ultimate state of focus and productivity for software development teams. It's a continuous delivery approach that enables your team to consistently deliver high-quality software at speed. By embracing Fast Flow, your team can achieve the state of "flow" – a heightened level of focus where time seems to melt away, and productivity soars. This translates to improved software delivery performance as measured by DORA's research, helping your organization stay ahead of the competition and deliver greater value to your customers.`,entities:{"continuous-delivery":{name:"Continuous delivery",link:"/capabilities/continuous-delivery/",summary:"<p>Teams can be said to have implemented continuous delivery when they have achieved the following outcomes:</p><ul><li>Teams can deploy to production (or to end users) on demand, throughout the software delivery lifecycle.</li><li>Fast feedback on the quality and deployability of the system is available to everyone on the team, and people make acting on this feedback their highest priority.</li></ul><p>Continuous delivery requires the implementation of a number of technical practices including continuous integration, trunk-based development, the comprehensive use of version control, and continuous testing.</p><p>In turn, continuous delivery drives a number of outcomes: higher software delivery performance, better organizational culture, less rework, lower deployment pain, and less burnout.</p>"},"database-change-management":{name:"Database change management",link:"/capabilities/database-change-management/",summary:"Database changes don’t slow teams down if they follow a few key practices, including storing database changes as scripts in version control (and managing these changes the same way as production application changes), making database changes visible to everyone in the software delivery lifecycle (including engineers), and communicating with all parties when changes to the application require database changes."},"deployment-automation":{name:"Deployment automation",link:"/capabilities/deployment-automation/",summary:"The degree to which deployments are fully automated and do not require manual intervention."},"flexible-infrastructure":{name:"Flexible infrastructure",link:"/capabilities/flexible-infrastructure/",summary:"<p>Infrastructure flexibility is often a motivation for organizations to adopt cloud computing. However, the use of a cloud provider alone may not be sufficient to achieve the desired agility. DORA’s research uses <a href='https://csrc.nist.gov/pubs/sp/800/145/final' target='_blank'>a definition</a> from The USA’s National Institute of Standards and Technology (NIST) to establish the five essential characteristics that enable cloud computing to provide its full potential benefit to an organization:</p><ul><li>On-demand self-service</li><li>Broad network access</li><li>Resource pooling</li><li>Rapid elasticity</li><li>Measured service</li></ul>"},"loosely-coupled-teams":{name:"Loosely coupled teams",link:"/capabilities/loosely-coupled-teams/",summary:"An organizational structure that allows teams to test and deploy their applications on demand, without requiring orchestration with other services. Team structure and technical architecture are highly interrelated: having a loosely coupled architecture allows your teams to work independently without relying on other teams for support and services, which in turn enables them to work quickly and deliver value to the organization."},"streamlining-change-approval":{name:"Streamlining change approval",link:"/capabilities/streamlining-change-approval/",summary:`Most IT organizations have change management processes to manage the life cycle of changes to IT services, both internal and customer-facing. These processes are often the primary controls to reduce the operational and security risks of change. Change management processes often include approvals by external reviewers or change approval boards (CABs) to promote changes through the system.

Our research shows that formal change management processes that require the approval of an external body such as a change advisory board (CAB) or a senior manager have a negative impact on software delivery performance. Furthermore, we found no evidence to support the hypothesis that a more formal approval process is associated with lower change fail rates. However the data does support the hypothesis that introducing more approvals results in a slower process and less frequent releases of large batches, with an accompanying higher impact on the production system that is likely associated with higher levels of risk and thus higher change fail rates.`},"version-control":{name:"Version control",link:"/capabilities/version-control/",summary:"The use of a version control system, such as Git or Subversion, for all production artifacts, including application code, application configurations, system configurations, and scripts for automating build and configuration of environments."},"working-in-small-batches":{name:"Working in small batches",link:"/capabilities/working-in-small-batches/",summary:"Create shorter lead times and faster feedback loops by working in small batches. This means breaking down changes—code or other artifacts—into manageable units that can be quickly tested and evaluated. This approach enables teams to rapidly validate their ideas, get feedback from users, and make necessary adjustments along the way. Small batches improve velocity because they can move quickly from commit to production, while also supporting stability; a smaller batch is likely to contain fewer bugs."}}},"fast-feedback":{name:"Fast feedback",summary:"Fast feedback enables a comprehensive approach that ensures your team receives rapid, actionable insights throughout the entire software delivery lifecycle.  Build confidence in the changes the team is making, leading to faster iteration and higher quality software. This translates to improved software delivery performance, helping your organization stay ahead of the curve and deliver exceptional value to your customers.",entities:{"continuous-integration":{name:"Continuous integration",link:"/capabilities/continuous-integration/",summary:"A development practice where code is regularly checked in, and each check-in triggers a set of quick tests to discover regressions, which developers fix immediately. The CI process creates canonical builds and packages that are ultimately deployed and released."},"monitoring-and-observability":{name:"Monitoring and observability",link:"/capabilities/monitoring-and-observability/",summary:"Monitoring and observability tooling allows teams to understand the health of their systems. Effective solutions enable teams to monitor predefined metrics, including system state as experienced by users, as well as allowing engineers to interactively debug systems and explore properties and patterns as they emerge."},"resilience-engineering":{name:"Resilience engineering",summary:"Resilience Engineering is not just about preventing failures, but about <b>embracing them</b> by designing, building, and running systems that can withstand them. Some principles include: accepting failure, continuous improvement, fault tolerance, data integrity, loadbalancing, replication, autoscaling, and automated recovery. By implementing its practices and principles, you can build internet-based distributed systems that are reliable, able to deliver consistent performance even in the face of unexpected events."},"pervasive-security":{name:"Pervasive security",link:"/capabilities/pervasive-security/",summary:"Incorporate security concerns throughout the software delivery lifecycle (SDLC)—by integrating security into the design and testing phases of the software development process. This process includes conducting security reviews of applications, including the infosec team in the design and demo process for applications, using pre-approved security libraries and packages, and testing security features as a part of the automated test suite."},"test-automation":{name:"Test automation",link:"/capabilities/test-automation/",summary:"Test throughout the software delivery lifecycle, rather than as a separate phase after “dev complete.” With continuous testing, developers and testers work side by side. High performers practice test-driven development, get feedback from tests in less than ten minutes, and continuously review and improve their test suites (for example, to better find defects and keep complexity under control)."},"test-data-management":{name:"Test data management",link:"/capabilities/test-data-management/",summary:"The management of test data is an increasingly important part of automated testing. Effective practices include having adequate data to run your test suite, the ability to acquire necessary data on demand, and the data not limiting the number of tests you can run. We caution that your teams should minimize, whenever possible, the amount of test data needed to run automated tests."}}}},ct={"software-delivery":{name:"Software delivery",link:"/guides/dora-metrics-four-keys/",summary:"DORA’s research has consistently found that a team’s software delivery capability reliably predicts the value that the team provides to their organization. Survey respondents who achieve high levels of software delivery performance report that their organizations perform better on business objectives. Performance can be assessed according to four software delivery metrics:",measured_by:"Four key metrics",entities:{changelead:{name:"Change lead time",link:"/guides/dora-metrics-four-keys/",summary:"This metric measures the time it takes for a code commit or change to be successfully deployed to production. It reflects the efficiency of your delivery pipeline."},deployfrequency:{name:"Deployment frequency",link:"/guides/dora-metrics-four-keys/",summary:"This metric measures how often application changes are deployed to production. Higher deployment frequency indicates a more agile and responsive delivery process."},changefail:{name:"Change fail percentage",link:"/guides/dora-metrics-four-keys/",summary:" This metric measures the percentage of deployments that cause failures in production, requiring hotfixes or rollbacks. A lower change failure rate indicates a more reliable delivery process."},recoverytime:{name:"Failed deployment recovery time",link:"/guides/dora-metrics-four-keys/",summary:"This metric measures the time it takes to recover from a failed deployment. A lower recovery time indicates a more resilient and responsive system."}}},reliability:{name:"Reliability",measured_by:"Service Level Objectives (SLOs)",summary:"Reliability is a system's ability to consistently perform its intended function without interruption or failure. This implies that the system is available, performant, correct, and predictable.  In Cloud computing, this requires attention to many parts of the software development lifecycle, including:  design, implementation, monitoring, automation, testing.  This might include practices like capacity planning, incident management, and release engineering.",entities:{"measurement-coverage":{name:"Measurement coverage",summary:'Are reliability measurements (SLIs) in place for all critical services/applications/components? The goal here should be to have <b>a set of SLIs that represent customer happiness for each critical service</b>. <br/><br/>How close to "full coverage" are you?'},"measurement-focus":{name:"Measurement focus",summary:"Do reliability measurement (SLI) definitions reflect system behavior as experienced by users?  For each of your existing SLIs, which ones can you say are really customer-centric? <br/><br/>For example, 'response-time' is customer-centric because the customer is waiting.  Try not to use infrastructure-centric (like 'cpu-time') or application-internal-centric (like 'queue-length') metrics.  <br/><br/>For each SLI, try writing a small comment describing <b>why it matters</b> to the end user. These measures should be <b>implementation independent</b>."},"target-optimization":{name:"Target optimization",summary:"Are reliability targets (SLOs) set appropriately, reflecting user sentiment and organizational capability? A good litmus test is to imagine changing the SLO, either higher or lower. <br/><br/>What would be the impact? Who would you have to talk to about this?  What is the effect on the business?  <br/><br/>If you are able to answer all of these (ideally through documentation) and make a well-informed decision to change or not, you're on the right track."},"target-compliance":{name:"Target compliance",summary:`Are reliability targets (SLOs) consistently met? How do you know, is there a single dashboard somewhere? One per team? <br/><br/>Can others in your organization find these numbers, and do they make sense to them?  If you're not sure, ask people to give it a shot and see how they do. Be careful when trying to "roll up" SLOs as aggregates can be misleading.`}}}},ut={"organizational-performance":{name:"Organizational performance",link:"https://cloud.google.com/resources/roi-of-devops-transformation-whitepaper",summary:`Organizational performance measures the ability of an organization to achieve commercial and non-commercial goals. Academic research has validated this measure and found it to be highly correlated to measures of return on investment (ROI), and it is robust to economic cycles.

Several years of analysis shows that, compared to low performers, organizations with the highest level of software delivery performance are twice as likely to exceed their goals. Employee well-being also contributes to organizational performance.`,entities:{"commercial-performance":{name:"Commercial Performance",link:"https://cloud.google.com/resources/roi-of-devops-transformation-whitepaper",summary:"Commercial goals may include:<ul><li>Profitability</li><li>Productivity</li><li>Market share</li><li>Number of customers</li><li>Quantity of products or services</li></ul>"},"noncommercial-performance":{name:"Non-commercial performance",summary:"Non-commercial goals may include:<ul><li>Operating efficiency</li><li>Customer satisfaction</li><li>Quality of products or services provided</li><li>Achieving organization or mission goals</li></ul>"}}},"well-being":{name:"Well-being",link:"/capabilities/well-being/",summary:"Well-being is a reflection of individuals’ happiness and job satisfaction. Increased well-being predicts organizational performance and employees’ job tenure. DORA has studied the impact of deployment pain, rework, and burnout on well-being.",entities:{"job-satisfaction":{name:"Job satisfaction",link:"/capabilities/job-satisfaction/",summary:"Job satisfaction represents employees feelings of fulfillment derived from engaging in challenging and meaningful work that utilizes their skills and expertise. When employees are empowered and provided with the necessary tools and resources, they produce better work, leading to improved software delivery performance and overall organizational success. To foster job satisfaction, ensure your people have the tools and resources to do their job, and can make good use of their skills and abilities."},productivity:{name:"Productivity",summary:"A productive team is a thriving team. Productivity reflects the ability to work effectively, experiment, iterate, and learn from those iterations to continuously improve the user experience. This approach fosters a sense of well-being among team members as they witness the positive impact of their work on users. Productivity in this sense is a holistic measure that encompasses both the team's efficiency and the value they create for others, resulting in a fulfilling and impactful work experience."},"reduced-burnout":{name:"Reduced burnout",link:"/capabilities/well-being/#burnout",summary:"Burnout is physical, mental, or emotional exhaustion caused by overwork or stress."},"reduced-rework":{name:"Reduced rework",link:"/capabilities/well-being/#rework",summary:"Rework is reactive unplanned work, including any break/fix work, emergency software deployments and patches, responding to urgent audit documentation requests, and so on."}}}},$={capabilities:lt,performance:ct,outcomes:ut};function Se(t,e,n){const i=t.slice();return i[4]=e[n][0],i[5]=e[n][1],i}function je(t){let e,n,i;function a(o){t[3](o)}let r={column:t[1],entity_group_id:t[4],entity_group:t[5],view_mode:t[2]};return t[0]!==void 0&&(r.selected_entity=t[0]),e=new rt({props:r}),M.push(()=>G(e,"selected_entity",a)),{c(){D(e.$$.fragment)},m(o,s){E(e,o,s),i=!0},p(o,s){const l={};s&2&&(l.column=o[1]),s&2&&(l.entity_group_id=o[4]),s&2&&(l.entity_group=o[5]),s&4&&(l.view_mode=o[2]),!n&&s&1&&(n=!0,l.selected_entity=o[0],V(()=>n=!1)),e.$set(l)},i(o){i||(L(e.$$.fragment,o),i=!0)},o(o){I(e.$$.fragment,o),i=!1},d(o){R(e,o)}}}function dt(t){let e,n,i=Oe(t[1])+"",a,r,o,s,l,c=ne(Object.entries($[t[1]])),u=[];for(let g=0;g<c.length;g+=1)u[g]=je(Se(t,c,g));const d=g=>I(u[g],1,1,()=>{u[g]=null});return{c(){e=b("section"),n=b("div"),a=S(i),r=q(),o=b("div");for(let g=0;g<u.length;g+=1)u[g].c();m(n,"class","heading svelte-l2g1q2"),m(o,"class","entities svelte-l2g1q2"),m(e,"class",s=t[1]+" "+t[2]+" svelte-l2g1q2")},m(g,_){O(g,e,_),p(e,n),p(n,a),p(e,r),p(e,o);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(o,null);l=!0},p(g,[_]){if((!l||_&2)&&i!==(i=Oe(g[1])+"")&&Z(a,i),_&7){c=ne(Object.entries($[g[1]]));let f;for(f=0;f<c.length;f+=1){const A=Se(g,c,f);u[f]?(u[f].p(A,_),L(u[f],1)):(u[f]=je(A),u[f].c(),L(u[f],1),u[f].m(o,null))}for(Be(),f=c.length;f<u.length;f+=1)d(f);Fe()}(!l||_&6&&s!==(s=g[1]+" "+g[2]+" svelte-l2g1q2"))&&m(e,"class",s)},i(g){if(!l){for(let _=0;_<c.length;_+=1)L(u[_]);l=!0}},o(g){u=u.filter(Boolean);for(let _=0;_<u.length;_+=1)I(u[_]);l=!1},d(g){g&&T(e),De(u,g)}}}function mt(t,e,n){let{column:i}=e,{selected_entity:a}=e,{view_mode:r="summary"}=e;function o(s){a=s,n(0,a)}return t.$$set=s=>{"column"in s&&n(1,i=s.column),"selected_entity"in s&&n(0,a=s.selected_entity),"view_mode"in s&&n(2,r=s.view_mode)},[a,i,r,o]}class ue extends N{constructor(e){super(),F(this,e,mt,dt,B,{column:1,selected_entity:0,view_mode:2})}}function ft(t){let e,n,i,a,r,o;return{c(){e=b("div"),n=b("span"),i=S(t[0]),a=q(),r=b("span"),r.textContent="→",m(n,"class","text svelte-lz9n6e"),m(e,"class",o=te(t[1])+" svelte-lz9n6e")},m(s,l){O(s,e,l),p(e,n),p(n,i),p(e,a),p(e,r)},p(s,[l]){l&1&&Z(i,s[0]),l&2&&o!==(o=te(s[1])+" svelte-lz9n6e")&&m(e,"class",o)},i:j,o:j,d(s){s&&T(e)}}}function ht(t,e,n){let{text:i="predicts"}=e,{view_mode:a="summary"}=e;return t.$$set=r=>{"text"in r&&n(0,i=r.text),"view_mode"in r&&n(1,a=r.view_mode)},[i,a]}class Pe extends N{constructor(e){super(),F(this,e,ht,ft,B,{text:0,view_mode:1})}}function $e(t){let e,n,i=t[0].toLowerCase()+"",a;return{c(){e=b("a"),n=S("Learn more about "),a=S(i),m(e,"href",t[2]),m(e,"target","_blank"),m(e,"class","svelte-r9h6jx")},m(r,o){O(r,e,o),p(e,n),p(e,a)},p(r,o){o&1&&i!==(i=r[0].toLowerCase()+"")&&Z(a,i),o&4&&m(e,"href",r[2])},d(r){r&&T(e)}}}function pt(t){let e,n,i,a,r,o,s,l,c,u,d,g,_,f,A,y=t[2]&&$e(t);return{c(){e=b("div"),n=b("div"),i=b("h1"),a=S(t[0]),r=q(),o=b("div"),s=b("a"),s.textContent="×",l=q(),c=b("p"),u=q(),d=b("div"),y&&y.c(),g=q(),_=b("div"),m(i,"class","svelte-r9h6jx"),m(s,"href","."),m(s,"class","svelte-r9h6jx"),m(n,"class","header svelte-r9h6jx"),m(c,"class","svelte-r9h6jx"),m(d,"class","footer svelte-r9h6jx"),m(e,"id","entityPopover"),m(e,"popover","auto"),m(e,"class","svelte-r9h6jx"),m(_,"id","link-blocker"),m(_,"class","svelte-r9h6jx")},m(C,v){O(C,e,v),p(e,n),p(n,i),p(i,a),p(n,r),p(n,o),p(o,s),p(e,l),p(e,c),c.innerHTML=t[1],p(e,u),p(e,d),y&&y.m(d,null),O(C,g,v),O(C,_,v),f||(A=X(s,"click",t[4]),f=!0)},p(C,[v]){v&1&&Z(a,C[0]),v&2&&(c.innerHTML=C[1]),C[2]?y?y.p(C,v):(y=$e(C),y.c(),y.m(d,null)):y&&(y.d(1),y=null)},i:j,o:j,d(C){C&&(T(e),T(g),T(_)),y&&y.d(),f=!1,A()}}}function gt(t,e,n){let{selected_entity:i="unspecified"}=e,a="",r="",o="";function s(c){for(const u in $)for(const d in $[u])if(d===i)n(0,a=$[u][d].name),n(1,r=$[u][d].summary),n(2,o=$[u][d].link);else for(const g in $[u][d].entities)g===i&&(n(0,a=$[u][d].entities[g].name),n(1,r=$[u][d].entities[g].summary),n(2,o=$[u][d].entities[g].link))}const l=c=>{c.preventDefault(),document.getElementById("entityPopover").hidePopover()};return t.$$set=c=>{"selected_entity"in c&&n(3,i=c.selected_entity)},t.$$.update=()=>{t.$$.dirty&8&&s()},[a,r,o,i,l]}class yt extends N{constructor(e){super(),F(this,e,gt,pt,B,{selected_entity:3})}}function vt(t){let e,n,i,a,r,o,s,l,c,u,d,g;return u=Ge(t[2][0]),{c(){e=b("div"),n=S(`View mode:
    `),i=b("label"),a=b("input"),r=S("summary"),o=q(),s=b("label"),l=b("input"),c=S("detail"),m(a,"type","radio"),m(a,"name","view_mode"),a.__value="summary",qe(a,a.__value),m(a,"id","summary"),m(a,"class","svelte-1c3arxl"),m(i,"for","summary"),m(i,"class","svelte-1c3arxl"),m(l,"type","radio"),m(l,"name","view_mode"),l.__value="detail",qe(l,l.__value),m(l,"id","detail"),m(l,"class","svelte-1c3arxl"),m(s,"for","detail"),m(s,"class","svelte-1c3arxl"),m(e,"class","viewcontrol svelte-1c3arxl"),u.p(a,l)},m(_,f){O(_,e,f),p(e,n),p(e,i),p(i,a),a.checked=a.__value===t[0],p(i,r),p(e,o),p(e,s),p(s,l),l.checked=l.__value===t[0],p(s,c),d||(g=[X(a,"change",t[1]),X(l,"change",t[3])],d=!0)},p(_,[f]){f&1&&(a.checked=a.__value===_[0]),f&1&&(l.checked=l.__value===_[0])},i:j,o:j,d(_){_&&T(e),u.r(),d=!1,Q(g)}}}function _t(t,e,n){let{view_mode:i="summary"}=e;const a=[[]];function r(){i=this.__value,n(0,i)}function o(){i=this.__value,n(0,i)}return t.$$set=s=>{"view_mode"in s&&n(0,i=s.view_mode)},[i,r,a,o]}class bt extends N{constructor(e){super(),F(this,e,_t,vt,B,{view_mode:0})}}const wt=""+new URL("dora-core-v2.0.0-summary.png",import.meta.url).href,kt=""+new URL("dora-core-v2.0.0-detail.png",import.meta.url).href;function Tt(t){let e,n,i,a,r,o,s;return{c(){e=b("div"),n=b("div"),n.textContent="DORA Core model v2.0.0",i=q(),a=b("div"),r=b("a"),o=S("download as PNG"),m(n,"class","version svelte-mxz8my"),m(r,"href",s=t[1][t[0]]),m(r,"target","_blank"),m(r,"class","svelte-mxz8my"),m(e,"class","core-footer svelte-mxz8my")},m(l,c){O(l,e,c),p(e,n),p(e,i),p(e,a),p(a,r),p(r,o)},p(l,[c]){c&1&&s!==(s=l[1][l[0]])&&m(r,"href",s)},i:j,o:j,d(l){l&&T(e)}}}function zt(t,e,n){let{view_mode:i="summary"}=e,a={summary:wt,detail:kt};return t.$$set=r=>{"view_mode"in r&&n(0,i=r.view_mode)},[i,a]}class qt extends N{constructor(e){super(),F(this,e,zt,Tt,B,{view_mode:0})}}const Ot="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20200%20200'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23005e8d;%20}%20.cls-2%20{%20fill:%20%23fff;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='M100,16.7L10,58.55v124.75l90-41.85,90,41.85V58.55L100,16.7Z'/%3e%3cpath%20class='cls-2'%20d='M176.84,118.07h-9.96l-2.47-9.6h-12.66l-2.47,9.6h-9.96l13.33-44.65h11.08l13.11,44.65Zm-22.63-18.74h7.84l-3.89-15.27-3.95,15.27Z'/%3e%3cpath%20class='cls-2'%20d='M86.04,118.07h-11.12c-5.54,0-10.04-4.6-10.04-10.25v-24.15c0-5.65,4.5-10.25,10.04-10.25h11.12c5.54,0,10.04,4.6,10.04,10.25v24.15c0,5.65-4.5,10.25-10.04,10.25Zm-9.26-35.43c-1.51,0-2.74,1.28-2.74,2.86v20.48c0,1.58,1.23,2.86,2.74,2.86h7.4c1.51,0,2.75-1.28,2.75-2.86v-20.48c0-1.58-1.23-2.86-2.75-2.86h-7.4Z'/%3e%3cpath%20class='cls-2'%20d='M135.42,118.07h-9.68l-6.05-14.13h-6.56v14.13h-9v-44.66h20.19c5.52,0,10.01,4.6,10.01,10.25v10.03c0,3.85-2.09,7.33-5.39,9.08l6.47,15.29Zm-22.27-23.35h9.39c1.54,0,2.8-1.29,2.8-2.87v-6.36c0-1.58-1.25-2.86-2.8-2.86h-9.39v12.09Z'/%3e%3cpath%20class='cls-2'%20d='M45.06,73.41H25.53v44.65h19.53c6.41,0,11.61-5.2,11.61-11.61v-21.42c0-6.41-5.2-11.61-11.61-11.61Zm2.58,31.43c0,2.21-1.79,4-4,4h-9.08v-26.21h9.08c2.21,0,4,1.79,4,4v18.21Z'/%3e%3c/svg%3e";function Ct(t){let e,n,i,a,r,o,s,l,c,u,d,g,_,f,A,y,C,v,w,k,P,ie,ae,H,Y;e=new yt({props:{selected_entity:t[0]}});function Ne(h){t[2](h)}let pe={};t[1]!==void 0&&(pe.view_mode=t[1]),s=new bt({props:pe}),M.push(()=>G(s,"view_mode",Ne));function He(h){t[3](h)}let ge={column:"capabilities",view_mode:t[1]};t[0]!==void 0&&(ge.selected_entity=t[0]),d=new ue({props:ge}),M.push(()=>G(d,"selected_entity",He)),f=new Pe({props:{text:"predict",view_mode:t[1]}});function We(h){t[4](h)}let ye={column:"performance",view_mode:t[1]};t[0]!==void 0&&(ye.selected_entity=t[0]),y=new ue({props:ye}),M.push(()=>G(y,"selected_entity",We)),w=new Pe({props:{text:"predicts",view_mode:t[1]}});function Ze(h){t[5](h)}let ve={column:"outcomes",view_mode:t[1]};return t[0]!==void 0&&(ve.selected_entity=t[0]),P=new ue({props:ve}),M.push(()=>G(P,"selected_entity",Ze)),H=new qt({props:{view_mode:t[1]}}),{c(){D(e.$$.fragment),n=q(),i=b("div"),a=b("div"),a.innerHTML=`<img src="${Ot}" alt="DORA" class="svelte-daqabx"/><h1 class="svelte-daqabx">Core Model</h1>`,r=q(),o=b("div"),D(s.$$.fragment),c=q(),u=b("div"),D(d.$$.fragment),_=q(),D(f.$$.fragment),A=q(),D(y.$$.fragment),v=q(),D(w.$$.fragment),k=q(),D(P.$$.fragment),ae=q(),D(H.$$.fragment),m(a,"class","title svelte-daqabx"),m(o,"class","view-control"),m(i,"class","header svelte-daqabx"),m(u,"class","coremodel svelte-daqabx")},m(h,z){E(e,h,z),O(h,n,z),O(h,i,z),p(i,a),p(i,r),p(i,o),E(s,o,null),O(h,c,z),O(h,u,z),E(d,u,null),p(u,_),E(f,u,null),p(u,A),E(y,u,null),p(u,v),E(w,u,null),p(u,k),E(P,u,null),O(h,ae,z),E(H,h,z),Y=!0},p(h,[z]){const _e={};z&1&&(_e.selected_entity=h[0]),e.$set(_e);const be={};!l&&z&2&&(l=!0,be.view_mode=h[1],V(()=>l=!1)),s.$set(be);const oe={};z&2&&(oe.view_mode=h[1]),!g&&z&1&&(g=!0,oe.selected_entity=h[0],V(()=>g=!1)),d.$set(oe);const we={};z&2&&(we.view_mode=h[1]),f.$set(we);const se={};z&2&&(se.view_mode=h[1]),!C&&z&1&&(C=!0,se.selected_entity=h[0],V(()=>C=!1)),y.$set(se);const ke={};z&2&&(ke.view_mode=h[1]),w.$set(ke);const re={};z&2&&(re.view_mode=h[1]),!ie&&z&1&&(ie=!0,re.selected_entity=h[0],V(()=>ie=!1)),P.$set(re);const Te={};z&2&&(Te.view_mode=h[1]),H.$set(Te)},i(h){Y||(L(e.$$.fragment,h),L(s.$$.fragment,h),L(d.$$.fragment,h),L(f.$$.fragment,h),L(y.$$.fragment,h),L(w.$$.fragment,h),L(P.$$.fragment,h),L(H.$$.fragment,h),Y=!0)},o(h){I(e.$$.fragment,h),I(s.$$.fragment,h),I(d.$$.fragment,h),I(f.$$.fragment,h),I(y.$$.fragment,h),I(w.$$.fragment,h),I(P.$$.fragment,h),I(H.$$.fragment,h),Y=!1},d(h){h&&(T(n),T(i),T(c),T(u),T(ae)),R(e,h),R(s),R(d),R(f),R(y),R(w),R(P),R(H,h)}}}function Lt(t,e,n){let i="unspecified",a="summary";function r(c){a=c,n(1,a)}function o(c){i=c,n(0,i)}function s(c){i=c,n(0,i)}function l(c){i=c,n(0,i)}return[i,a,r,o,s,l]}class At extends N{constructor(e){super(),F(this,e,Lt,Ct,B,{})}}new At({target:document.getElementById("app")});
