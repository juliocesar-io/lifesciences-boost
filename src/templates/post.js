import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';

import components, {Layout} from '../components/index';
import {htmlToReact} from '../utils';
import BlogPostTags from '../components/BlogPostTags';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Post extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let background = _.get(section, 'background', null);
        let background_color = _.get(background, 'background_color', null) || 'white';
        let background_opacity_pct = _.get(background, 'background_image_opacity', null) || 100;
        let background_opacity = background_opacity_pct * 0.01;
        let background_size = _.get(background, 'background_image_size', null) || 'cover';
        let background_repeat = _.get(background, 'background_image_repeat', null) || 'no-repeat';
        return (
            <Layout {...this.props}>
            {_.map(_.get(this.props, 'pageContext.frontmatter.sections', null), (section, section_idx) => {
                let component = _.upperFirst(_.camelCase(_.get(section, 'type', null)));
                let Component = components[component];
                return (
                  <Component key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} />
                )
            })}
            <article className="post">
              <div className="container container--md">
                <div className="post__copy">
                  {htmlToReact(_.get(this.props, 'pageContext.html', null))}
                </div>
                {_.get(this.props, 'pageContext.frontmatter.tags', null) && (
                <footer className="post__footer">
                  <BlogPostTags {...this.props} tags={_.get(this.props, 'pageContext.frontmatter.tags', null)} />
                </footer>
                )}
              </div>
            </article>
            </Layout>
        );
    }
}
