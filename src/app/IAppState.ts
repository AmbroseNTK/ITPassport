import { User } from './states/models/user.model';
import { Config } from './states/models/config.model';
import { Category } from './states/models/category.model';
import History from './states/models/history.model';
import Question from './states/models/question.model';
import SysLog from './states/models/syslog.model';

/**
 * Store all app states
 */
export default interface IAppState {
    /**
     * All user information
     */
    user: User;
    /**
     * App configuration
     */
    config: Config;

    category: Category;

    history: History;

    question: Question;

    syslog: SysLog;
}