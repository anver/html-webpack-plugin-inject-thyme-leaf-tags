type TOptions = { scriptPrefix: string; stylePrefix: string };

import HtmlWebpackPlugin from "html-webpack-plugin";

function HtmlWebpackPluginInjectThymeLeafTags(
  this: any,
  options: TOptions | {} = {}
) {
  this.options = options;
  this.PluginName = "HtmlWebpackPluginInjectThymeLeafTags";
}

HtmlWebpackPluginInjectThymeLeafTags.prototype.apply = function (
  compiler: any
) {
  compiler.hooks.thisCompilation.tap(this.PluginName, (compilation: any) => {
    var self = this;
    HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution.tapAsync(
      this.PluginName,
      <T extends { headTags: any; bodyTags: any }>(data: T, cb: any) => {
        const { headTags, bodyTags } = data;

        headTags.forEach(function (tag: any) {
          self.injectTags(tag);
        });

        bodyTags.forEach(function (tag: any) {
          self.injectTags(tag);
        });

        cb(null, data);
      }
    );
  });
};

HtmlWebpackPluginInjectThymeLeafTags.prototype.injectTags = function (
  tag: any
) {
  if (tag.attributes.src)
    tag.attributes[
      "th:src"
    ] = `@{${this.options.scriptPrefix}${tag.attributes.src}}`;

  if (tag.attributes.href)
    tag.attributes[
      "th:href"
    ] = `@{${this.options.scriptPrefix}${tag.attributes.href}}`;

  const { src, href, ...rest } = tag.attributes;
  tag.attributes = rest;

  return tag;
};

export default HtmlWebpackPluginInjectThymeLeafTags;
