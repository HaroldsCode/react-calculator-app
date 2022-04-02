import { CustomHeader } from '../Style';
import { Theme } from './Theme';

export const Header = () => {

  return (
    <CustomHeader>
      <h1>calc</h1>
      <div>
        <p>Theme</p>
        <Theme/>
      </div>
    </CustomHeader>
  )
}
