"use strict";
const HtmlWebpackPlugin = require("html-webpack-plugin");

function HtmlWebpackPluginInjectThymeLeafTags(options = {}) {
  this.options = options;
  this.PluginName = "HtmlWebpackPluginInjectThymeLeafTags";
}

HtmlWebpackPluginInjectThymeLeafTags.prototype.apply = function (compiler) {
  compiler.hooks.thisCompilation.tap(this.PluginName, compilation => {
    var self = this;
    HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution.tapAsync(
      this.PluginName,
      (data, cb) => {
        const { headTags, bodyTags } = data;

        headTags.forEach(function (tag) {
          self.injectTags(tag);
        });

        bodyTags.forEach(function (tag) {
          self.injectTags(tag);
        });

        cb(null, data);
      }
    );
  });
};

HtmlWebpackPluginInjectThymeLeafTags.prototype.injectTags = function (tag) {
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
