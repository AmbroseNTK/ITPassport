import { User } from './states/models/user.model';
import { Config } from './states/models/config.model';

export default interface IAppState {
    user: User;
    config: Config;
}