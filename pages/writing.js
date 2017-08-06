import Analytics from '../containers/Analytics'
import BlogList from '../components/BlogList'
import DarkMode from '../containers/DarkMode'
import Layout from '../components/Layout'
import Theme from '../containers/Theme'
import posts from '../.content/summary.json'
import { sortByDate } from '../utils/posts'

export default props => (
  <Analytics>
    <DarkMode>
      <Theme>
        {(background, color, onClick) => (
          <Layout background={background} color={color} onClick={onClick} title='Writing'>
            <BlogList
              background={background}
              color={color}
              onClick={onClick}
              posts={sortByDate(posts)}
            />
          </Layout>
        )}
      </Theme>
    </DarkMode>
  </Analytics>
)