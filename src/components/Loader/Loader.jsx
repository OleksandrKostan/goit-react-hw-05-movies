import s from './Loader.module.css';
import { Vortex } from 'react-loader-spinner';


export function Loader() {
  return (
     <div className={s.loader}>
 <Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/>
  </div>
  );
}