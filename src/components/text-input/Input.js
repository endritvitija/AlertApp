import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet
} from "react-native";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ width: "100%", marginTop: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginBottom: 0, paddingBottom: 0 }}>
            {this.props.label}
          </Text>
          {this.props.requred ? <Text style={{ color: "red" }}>*</Text> : null}
        </View>
        <TouchableOpacity
          activeOpacity={1}
          style={[this.props.errorShow ? styles.borderRequred : styles.border]}
          onPress={() => {
            this.textInput.focus();
          }}
        >
          <TextInput
            allowFontScaling={this.props.allowFontScaling}
            autoCapitalize={this.props.autoCapitalize}
            autoCompleteType={this.props.autoCompleteType}
            autoCorrect={this.props.autoCorrect}
            autoFocus={this.props.autoFocus}
            blurOnSubmit={this.props.blurOnSubmit}
            caretHidden={this.props.caretHidden}
            clearButtonMode={this.props.clearButtonMode}
            clearTextOnFocus={this.props.clearTextOnFocus}
            contextMenuHidden={this.props.contextMenuHidden}
            dataDetectorTypes={this.props.dataDetectorTypes}
            defaultValue={this.props.defaultValue}
            disableFullscreenUI={this.props.disableFullscreenUI}
            editable={this.props.editable}
            enablesReturnKeyAutomatically={
              this.props.enablesReturnKeyAutomatically
            }
            importantForAutofill={this.props.importantForAutofill}
            inlineImageLeft={this.props.inlineImageLeft}
            inlineImagePadding={this.props.inlineImagePadding}
            inputAccessoryViewID={this.props.inputAccessoryViewID}
            keyboardAppearance={this.props.keyboardAppearance}
            keyboardType={this.props.keyboardType}
            maxFontSizeMultiplier={this.props.maxFontSizeMultiplier}
            maxLength={this.props.maxLength}
            multiline={this.props.multiline}
            placeholder={this.props.placeholder}
            numberOfLines={this.props.numberOfLines}
            onBlur={this.props.onBlur}
            onChange={this.props.onChange}
            onChangeText={this.props.onChangeText}
            onContentSizeChange={this.props.onContentSizeChange}
            onEndEditing={this.props.onEndEditing}
            onFocus={this.props.onFocus}
            onKeyPress={this.props.onKeyPress}
            onLayout={this.props.onLayout}
            onScroll={this.props.onScroll}
            onSelectionChange={this.props.onSelectionChange}
            onSubmitEditing={this.props.onSubmitEditing}
            rejectResponderTermination={this.props.rejectResponderTermination}
            returnKeyLabel={this.props.returnKeyLabel}
            returnKeyType={this.props.returnKeyType}
            scrollEnabled={this.props.scrollEnabled}
            secureTextEntry={this.props.secureTextEntry}
            selection={this.props.selection}
            selectionColor={this.props.selectionColor}
            selectionState={this.props.selectionState}
            selectTextOnFocus={this.props.selectTextOnFocus}
            spellCheck={this.props.spellCheck}
            textBreakStrategy={this.props.textBreakStrategy}
            textContentType={this.props.textContentType}
            underlineColorAndroid={this.props.underlineColorAndroid}
            value={this.props.value}
            style={[styles.textInput]}
            ref={input => {
              this.textInput = input;
            }}
          />
        </TouchableOpacity>
        {this.props.errorShow ? (
          <Text style={styles.requredText}>{this.props.errorMessage}</Text>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 16,
    textAlign: "left",
    textAlignVertical: "center",
    color: "#000",
    marginRight: 15,
    width: "100%"
  },
  border: {
    borderColor: "#f1f1f1",
    borderWidth: 1,
    borderRadius: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 2,
    paddingLeft: 15
  },
  borderRequred: {
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 2,
    paddingLeft: 15
    // paddingRight: 15
  },
  editText: {
    color: "#ddd",
    fontSize: 15
  },
  space: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#1C262F",
    borderWidth: 1,
    borderRadius: 3
  },
  requredText: {
    color: "red",
    fontSize: 15
  }
});
